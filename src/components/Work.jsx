import React from 'react';
import WorkItem from './WorkItem';

function Work() {
  const workItems = [
    {
      title: 'Block Bank',
      info: 'Where Banking meets the chain',
      github: 'https://github.com/vgalante2/block-bank'
    },
    {
      title: 'Dream Stay',
      info: 'Your Dream Vaca is a click away',
      github: 'https://github.com/vgalante2/dream_stay'
    },
    {
      title: 'Vinchy Exclusives',
      info: 'Street Clothing Brand',
      github: 'https://github.com/vgalante2/vinchyExclusives'
    },
    {
        title: 'SVG-PAL',
        info: 'Make an SVG from scratch',
        github: 'https://github.com/vgalante2/svg_pal'
      },
      {
        title: 'Pillar Labs',
        info: 'Digital Marketing Agency',
        github: 'https://github.com/vgalante2/PillarLabs'
      },
      {
        title: 'README GEN',
        info: 'README Generator',
        github: 'https://github.com/vgalante2/README_Generator'
      },
    
  ];

  return (
    <section id="projects" className="d-flex align-items-center justify-content-around p-5 flex-wrap">
      <div className="row">
        {workItems.map((item, index) => (
          <div className="col-4" key={index}>
            <WorkItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;