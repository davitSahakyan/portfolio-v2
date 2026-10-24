import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { wedding } from '../wedding.config';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/jpeg';

const CACHE_CONTROL = 'public, immutable, no-transform, max-age=31536000';

const OG_DIR = join(process.cwd(), 'src/app/(wedding)/davittatevwedding/_og');

const COLORS = {
  cream: '#f6ede3',
  terracotta: '#c06f57',
  terracottaDeep: '#96483a',
  muted: '#7f6b61',
  gold: '#b48d5c',
};

// Link preview: guest name on the left, couple photo on the right (420x630 = the photo's 2:3 ratio).
// Re-encoded as JPEG because WhatsApp skips preview images over ~300KB and the PNG is ~400KB.
export async function renderInviteImage(recipient: string) {
  const png = await (await renderInvitePng(recipient)).arrayBuffer();

  try {
    const { default: sharp } = await import('sharp');
    const jpeg = await sharp(Buffer.from(png)).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
    return new Response(new Uint8Array(jpeg), {
      headers: { 'Content-Type': ogContentType, 'Cache-Control': CACHE_CONTROL },
    });
  } catch (error) {
    // A bigger PNG preview is still better than a broken one
    console.error('Wedding preview: JPEG conversion failed, serving PNG', error);
    return new Response(png, {
      headers: { 'Content-Type': 'image/png', 'Cache-Control': CACHE_CONTROL },
    });
  }
}

async function renderInvitePng(recipient: string) {
  const [serif, serifSemiBold, latin, latinItalic, photo] = await Promise.all([
    readFile(join(OG_DIR, 'fonts/NotoSerifArmenian-Regular.ttf')),
    readFile(join(OG_DIR, 'fonts/NotoSerifArmenian-SemiBold.ttf')),
    readFile(join(OG_DIR, 'fonts/CormorantGaramond-Medium.ttf')),
    readFile(join(OG_DIR, 'fonts/CormorantGaramond-MediumItalic.ttf')),
    readFile(join(OG_DIR, 'couple-og.jpg')),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;
  const [first, second] = wedding.names;
  const nameSize = recipient.length > 34 ? 46 : recipient.length > 20 ? 56 : 66;

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: COLORS.cream }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 780,
            padding: '0 64px',
            textAlign: 'center',
            border: `2px solid ${COLORS.gold}`,
            borderRight: 'none',
            margin: 28,
            marginRight: 0,
            borderRadius: '24px 0 0 24px',
          }}
        >
          <div style={{ fontFamily: 'Serif', fontSize: 24, letterSpacing: 8, color: COLORS.gold }}>
            ՀԱՐՍԱՆՅԱՑ ՀՐԱՎԵՐ
          </div>
          <div
            style={{
              marginTop: 30,
              fontFamily: 'Serif',
              fontWeight: 600,
              fontSize: nameSize,
              lineHeight: 1.2,
              color: COLORS.terracottaDeep,
            }}
          >
            {recipient}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 34 }}>
            <div style={{ width: 80, height: 2, background: COLORS.gold }} />
            <div
              style={{
                width: 12,
                height: 12,
                margin: '0 16px',
                border: `2px solid ${COLORS.gold}`,
                transform: 'rotate(45deg)',
              }}
            />
            <div style={{ width: 80, height: 2, background: COLORS.gold }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              marginTop: 30,
              fontFamily: 'Serif',
              fontSize: 40,
              color: COLORS.terracotta,
            }}
          >
            {first}
            <span style={{ fontFamily: 'Latin', fontStyle: 'italic', margin: '0 14px', color: COLORS.gold }}>
              &amp;
            </span>
            {second}
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: 'Serif',
              fontSize: 28,
              letterSpacing: 6,
              color: COLORS.muted,
            }}
          >
            {wedding.date.short}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} width={420} height={630} alt="" style={{ objectFit: 'cover' }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Serif', data: serif, weight: 400, style: 'normal' },
        { name: 'Serif', data: serifSemiBold, weight: 600, style: 'normal' },
        { name: 'Latin', data: latin, weight: 500, style: 'normal' },
        { name: 'Latin', data: latinItalic, weight: 500, style: 'italic' },
      ],
    }
  );
}
