'use client';

import { useEffect, useMemo, useState } from 'react';
import { greetingWord, invitationPath, parseGuestName } from '../../guest';
import { SITE_URL } from '../../wedding.config';
import './linkBuilder.css';

const STORAGE_KEY = 'wd-link-builder';

type SavedState = {
  text: string;
  warm: string[];
  sent: string[];
};

function readSaved(): SavedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedState) : null;
  } catch {
    return null;
  }
}

function LinkBuilder() {
  const [text, setText] = useState('');
  const [warm, setWarm] = useState<string[]>([]);
  const [sent, setSent] = useState<string[]>([]);
  const [origin, setOrigin] = useState(SITE_URL);
  const [canShare, setCanShare] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
    setCanShare(typeof navigator.share === 'function');
    const saved = readSaved();
    if (saved) {
      setText(saved.text);
      setWarm(saved.warm);
      setSent(saved.sent);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ text, warm, sent }));
    } catch {
      // private mode: the list just won't be remembered
    }
  }, [text, warm, sent, loaded]);

  const guests = useMemo(() => {
    const names = text.split('\n').map(parseGuestName).filter(Boolean);
    return Array.from(new Set(names)).map((name) => {
      const isWarm = warm.includes(name);
      const url = `${origin}${invitationPath(name, isWarm)}`;
      const message = `${greetingWord(isWarm)} ${name}, սիրով հրավիրում ենք Ձեզ մեր հարսանիքին 🤍`;
      return { name, isWarm, url, message };
    });
  }, [text, warm, origin]);

  const toggleIn = (list: string[], name: string) =>
    list.includes(name) ? list.filter((item) => item !== name) : [...list, name];

  const markSent = (name: string) => setSent((list) => (list.includes(name) ? list : [...list, name]));

  const copy = async (name: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(name);
      markSent(name);
      setTimeout(() => setCopied((current) => (current === name ? null : current)), 1800);
    } catch {
      window.prompt('Պատճենեք հղումը', url);
    }
  };

  const share = async (name: string, message: string, url: string) => {
    try {
      await navigator.share({ text: `${message}\n${url}` });
      markSent(name);
    } catch {
      // share sheet dismissed
    }
  };

  return (
    <main className="wd-links">
      <h1 className="wd-links__title">Հրավերի հղումներ</h1>
      <p className="wd-links__hint">
        Գրեք հյուրերի անունները՝ յուրաքանչյուրը նոր տողում։ «Սիրելի» նշեք մտերիմների համար։
      </p>

      <textarea
        className="wd-links__input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={'Կոնստանտին և Հերմինե\nԱրամ Սարգսյան'}
        rows={5}
        autoCapitalize="words"
      />

      {guests.length > 0 && (
        <p className="wd-links__count">
          {guests.length} հրավեր · ուղարկված՝ {guests.filter((guest) => sent.includes(guest.name)).length}
        </p>
      )}

      <ul className="wd-links__list">
        {guests.map(({ name, isWarm, url, message }) => (
          <li key={name} className={`wd-links__item ${sent.includes(name) ? 'is-sent' : ''}`}>
            <div className="wd-links__row">
              <p className="wd-links__name">
                {sent.includes(name) && <span aria-label="ուղարկված">✓ </span>}
                {greetingWord(isWarm)} {name}
              </p>
              <label className="wd-links__warm">
                <input type="checkbox" checked={isWarm} onChange={() => setWarm((list) => toggleIn(list, name))} />
                Սիրելի
              </label>
            </div>
            <a className="wd-links__url" href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
            <div className="wd-links__actions">
              {canShare && (
                <button type="button" className="wd-links__btn wd-links__btn--primary" onClick={() => share(name, message, url)}>
                  Ուղարկել
                </button>
              )}
              <button type="button" className="wd-links__btn" onClick={() => copy(name, url)}>
                {copied === name ? 'Պատճենված ✓' : 'Պատճենել'}
              </button>
              <a
                className="wd-links__btn"
                href={`https://wa.me/?text=${encodeURIComponent(`${message}\n${url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => markSent(name)}
              >
                WhatsApp
              </a>
              <a
                className="wd-links__btn"
                href={`viber://forward?text=${encodeURIComponent(`${message}\n${url}`)}`}
                onClick={() => markSent(name)}
              >
                Viber
              </a>
              <a
                className="wd-links__btn"
                href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => markSent(name)}
              >
                Telegram
              </a>
            </div>
          </li>
        ))}
      </ul>

      {sent.length > 0 && (
        <button type="button" className="wd-links__reset" onClick={() => setSent([])}>
          Մաքրել «ուղարկված» նշումները
        </button>
      )}
    </main>
  );
}

export default LinkBuilder;
