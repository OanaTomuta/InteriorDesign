import React from "react";
import { Container, Wrapper, Row, Column, Link, Title} from './styles/footerStyle';

export default function Footer({children, locale,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, locale,...restProps}){
    return <Wrapper {...restProps} locale={locale}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, locale,...restProps}){
    return <Row {...restProps} locale={locale}>{children}</Row>
}

Footer.Column = function FooterColumn({children, locale,...restProps}){
    return <Column {...restProps} locale={locale}>{children}</Column>
}

Footer.Link = function FooterLink({children, locale,...restProps}){
    return <Link {...restProps} locale={locale}>{children}</Link>
}

Footer.Title = function FooterTitle({children, locale,...restProps}){
    return <Title {...restProps} locale={locale}>{children}</Title>
}