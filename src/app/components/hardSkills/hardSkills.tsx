"use client"
import { useEffect, useState } from 'react';
import LinearWithValueLabel from "../progress/progressLine/ProgressLine";
import {client} from '../../../../lib/contentful';
import "./hardSkills.css"
import { Skeleton } from "@mui/material";


interface HardSkill {
  name: string;
  lvl: number;
}

function HardSkills() {
  const [posts, setPosts] = useState<HardSkill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.getEntries({ content_type: 'hardSkill' });
        // Transform Contentful data to match your component's expected format
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transformedData = res.items.map((item: any) => ({
          name: item.fields.name,
          lvl: item.fields.lvl || item.fields.level || item.fields.percentage || 0
        }));

        setPosts(transformedData);
      } catch (error) {
        console.error('Error fetching hard skills from Contentful:', error);
        // Keep using fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="hard-skills-container pt-15 pb-15">
        <Skeleton width="20%" />
        <Skeleton />
        <Skeleton width="20%" />
        <Skeleton />
        <Skeleton width="20%" />
        <Skeleton />
        <Skeleton width="20%" />
        <Skeleton />
      </div>
    );
  }

  return (
      <div className="hard-skills-container pt-15 pb-15">
        {posts.map(item => {
            return (<div key={item.name} className="hard-skills-item">
                <h6 className="mt-10">{item.name}</h6>
                <LinearWithValueLabel startValue={0} endValue={item.lvl}/>
            </div>)
        })}
      </div>
  )
}

export default HardSkills