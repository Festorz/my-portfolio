import { Box } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import { Star } from '@material-ui/icons';
import PixIcon from '@mui/icons-material/Pix';
import React from 'react';
import { scoredata, skills } from '../navbar/data';
import { ColoredBox, DescBox, DescriptionText, MainBox, SkillsBox, StarSection, StyledGrid, StyledGridItem, StyledIcon, StyledPaper, StyledScores, StyledSection, StyledText, TimeBox } from '../styles/styles';


const About = () => {

    const education = [
        {
            id: 1,
            role: 'APPLIED COMPUTER SCIENCE DEGREE',
            duration: 'SEPT 2016 - APR 2020',
            institution: 'KISII UNIVERSITY',
            skills: [
                {
                    id: 1,
                    skill: 'Algorithm Analysis'
                },
                {
                    id: 2,
                    skill: 'Web Design And Development'
                },
                {
                    id: 3,
                    skill: 'Database Management And Administration.'
                },
                {
                    id: 4,
                    skill: 'Artificial Intelligence, IOT and Machine Learning'
                },
                {
                    id: 5,
                    skill: 'Human Computer Interaction'
                },
                {
                    id: 6,
                    skill: 'System Analysis And Design'
                },
                {
                    id: 7,
                    skill: 'Cloud Computing'
                },
                {
                    id: 8,
                    skill: 'Web and Mobile Applications Development'
                },
            ]

        },
    ]

    return (
        <MainBox mtop={70}>
            <Box align='center'>
                <StyledText mcolor={"#fff"}>About <b style={{ color: '#ff8f00' }}>Me</b> </StyledText>
            </Box>
            <StyledSection>
                <StyledPaper>
                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Name :</DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>Festus Kibet Kirui</DescriptionText>
                    </DescBox>
                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Email :</DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>festaskirui@gmail.com</DescriptionText>
                    </DescBox>
                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Age :</DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>25</DescriptionText>
                    </DescBox>

                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Stack: </DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>Nodejs, Next Js, React Js, JavaScript, Python, Django,
                            PHP, Laravel, Flutter, REST APIS, SQL, NO-SQL, CSS, HTML,
                            Linux, Git, Heroku, Cpanel web hosting</DescriptionText>
                    </DescBox>

                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Post :</DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>Software Engineer</DescriptionText>
                    </DescBox>

                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Language :</DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>English, Swahili</DescriptionText>
                    </DescBox>

                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Location :</DescriptionText>
                        <DescriptionText mcolor={'#e3f2fd'}>Nakuru, Kenya</DescriptionText>
                    </DescBox>

                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>LinkedIn :</DescriptionText>
                        <DescriptionText component='a' href="https://www.linkedin.com/in/festus-kirui-566451205/">My Profile</DescriptionText>
                    </DescBox>
                    <DescBox>
                        <DescriptionText mvariant={true} mbold mright={10}>Github :</DescriptionText>
                        <DescriptionText component='a' href="https://github.com/festorz">My Projects</DescriptionText>
                    </DescBox>
                </StyledPaper>
                <StyledPaper>
                    <StyledGrid container>
                        {scoredata.map((data) => (
                            <StyledGridItem item key={data.id}>
                                <StyledScores>
                                    <StyledText mfontsize={50} mcolor={'#27AE60'} variant='subtitle1' >{data.number}</StyledText>
                                    <StyledSection>
                                        <StyledText mcolor={'#e3f2fd'} mfontsize={20} mbold variant='subtitle2'>{data.value}</StyledText>
                                    </StyledSection>
                                    <StarSection mtop={50}>
                                        {[...Array(data.stars)].map((num) =>
                                            <StyledIcon mcolor={amber[800]}>
                                                <Star key={num} />
                                            </StyledIcon>
                                        )}
                                    </StarSection>
                                </StyledScores>
                            </StyledGridItem>
                        ))}
                    </StyledGrid>
                </StyledPaper>
            </StyledSection>
            <Box align='center'>
                <StyledText mfontsize={35} mcolor={"#fff"} mtop={50}>My skills</StyledText>
            </Box>
            <StyledPaper mwidth={'inherit'}>
                <StyledGrid container>
                    {skills.map((data) => (
                        <StyledGridItem item key={data.id}>
                            <DescriptionText malign='start' transform='uppercase' mvariant={true} mbold mfontsize={15} mcolor={amber[800]}>{data.skill}</DescriptionText>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1, ml: 1 }}>
                                    <ColoredBox >
                                        <ColoredBox mcolor={'#27AE60'} mwidth={data.level}>{data.level}</ColoredBox>
                                    </ColoredBox>
                                </Box>
                                <Box sx={{ minWidth: 35 }}>
                                    <StyledText mfontsize={15} mcolor={'#fff'} mbold>{data.level}%</StyledText>
                                </Box>
                            </Box>
                        </StyledGridItem>

                    ))}
                </StyledGrid>
            </StyledPaper>


            <Box align='center'>
                <StyledText mfontsize={35} mcolor={"#fff"} mtop={50}>Education</StyledText>
            </Box>

            <Box align=''>
                {education.map((data) => (
                    <StyledPaper mwidth={'70%'}>
                        <DescriptionText mvariant={true} mcolor={amber[800]} mfontsize={20} mbold transform={'capitalize'}>
                            {data.role} <b style={{ color: '#27AE60' }}> - {data.institution}</b>
                        </DescriptionText>
                        <TimeBox>
                            <DescriptionText mcolor={'#fff'} mfontsize={14}>{data.duration}</DescriptionText>
                        </TimeBox>
                        {data.skills.map((skl) => (
                            <SkillsBox key={skl.id}>
                                <Box sx={{ mr: 1, ml: 1, }}>
                                    <StyledIcon mcolor={amber[800]} mfontsize={14}><PixIcon fontSize='small' /></StyledIcon>
                                </Box>
                                <DescriptionText mcolor={'#e3f2fd'} mfontsize={16}>
                                    {skl.skill}
                                </DescriptionText>
                            </SkillsBox>
                        ))}

                    </StyledPaper>
                ))}
            </Box>
        </MainBox>
    )

}

export default About