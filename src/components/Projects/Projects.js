import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsData = [{
        title: 'Project 1',
        description: 'My first project'
    },{
    title: 'Project 2',
        description: 'My first project'
},{
    title: 'Project 3',
        description: 'My first project'
},{
    title: 'Project 4',
        description: 'My first project'
}];


const Projects = () => (
<Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
        {projectsData.map((project) => (
            <div>
                {project.title}
                <br/>
                {project.description}
            </div>
        ))}
    </GridContainer>
</Section>
);

export default Projects;