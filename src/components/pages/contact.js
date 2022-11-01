import { Box } from '@material-ui/core'
import React from 'react'
import { contacts, socialLinks } from '../navbar/data'
import { DescBox, DescriptionText, MainBox, SocialIcons, StyledPaper, StyledRow, StyledText } from '../styles/styles'

const Contacts = () => {
    return (
        <MainBox mtop={50}>
            <Box align='center'>
                <StyledText mcolor={"#fff"}>Contact <b style={{ color: '#ff8f00' }} >Me</b></StyledText>
                <StyledPaper mwidth={'70%'} mtop={20}>
                    {contacts.map((contact) => (
                        <DescBox mjustify={'space-between'} key={contact.id}>
                            <DescriptionText mvariant mbold>{contact.title} :</DescriptionText>
                            <DescriptionText mvariant mbold mcolor={'#e3f2fd'} >{contact.label}</DescriptionText>
                        </DescBox>
                    ))}
                </StyledPaper>

                <StyledPaper mwidth={'50%'} mtop={20}>
                    <StyledRow mjustify={'space-around'}>
                        {socialLinks.map((link) => (
                            <SocialIcons component={'a'} href={link.link} target='_blank' title={link.title} mcolor={'#ff8f00'} key={link.id}>{link.icon}</SocialIcons>
                        ))}
                    </StyledRow>
                </StyledPaper>
            </Box>
        </MainBox>
    )
}

export default Contacts