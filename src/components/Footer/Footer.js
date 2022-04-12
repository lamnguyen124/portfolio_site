import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
    <LinkList>
        <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:830-479-6198">830-479-6198</LinkItem>
        </LinkColumn>
        <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:nguyen.h.lam12@gmail.com">Contact</LinkItem>
        </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>Learning and improving with each line of code</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/lamnguyen124">
            <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/lnguyen04">
            <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com/ironnova">
            <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
    </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
