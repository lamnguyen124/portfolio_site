import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section>
    <SectionDivider/>
        <br/>
        <SectionText>
            I've worked from both frontend to backend, and different frameworks.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem"/>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experience with <br/>
                        Angular
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem"/>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br/>
                        Spring Boot and Databases
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiZend size="3rem"/>
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experience with <br/>
                        Adobe XD and Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
