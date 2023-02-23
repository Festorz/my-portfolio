import { Box } from '@material-ui/core'
import { GitHub, OpenInBrowser } from '@material-ui/icons'
import React, { useState } from 'react'
import { projects } from '../navbar/data'
import { MainBox, ProjectBox, ProjectFooter, ProjectImage, ProjectLinks, StyledGrid, StyledGridItem, StyledIcon, StyledSection, StyledText } from '../styles/styles'

const Work = () => {
    const [show, setShow] = useState(false);
    const [showId, setShowId] = useState(0);

    const handleMouseOver = (id) => {
        setShow(true);
        setShowId(id);
    }
    const handleMouseLeave = () => {
        setShow(false);
        setShowId(0);
    }
    return (
        <MainBox mtop={70}>
            <Box align='center'>
                <StyledText mcolor={"#fff"}>My <b style={{ color: '#ff8f00' }}>Projects</b> </StyledText>
                <StyledText mbold mcolor={"#fff"} mfontsize={18} tstyle={'normal'} mtop={10} mvariant>
                    Here are some of the projects I have worked on in various Programming Languages.
                </StyledText>
            </Box>
            <StyledSection mtop={20} >
                <StyledGrid container>
                    {projects.map((project) => (
                        <StyledGridItem item mwidth={'30%'} key={project.id} >
                            <ProjectBox onMouseOver={() => handleMouseOver(project.id)}
                                onMouseLeave={handleMouseLeave}>
                                <ProjectImage component="img" alt={project.label}
                                    src={project.image} />
                                {show && showId === project.id && (
                                    <ProjectFooter align='center'>
                                        <StyledText mcolor={'#ff8f00'} mfontsize={20} tstyle={'normal'} mvariant>
                                            {project.label}
                                        </StyledText>
                                        <StyledText mcolor={'#27AE60'} mfontsize={16} tstyle={'normal'} mvariant>
                                            Tech: <b style={{ color: '#e3f2fd' }} >{project.tech}</b>
                                        </StyledText>
                                        <ProjectLinks>
                                            <Box>
                                                <StyledIcon component={'a'} title='GitHub Repo' href={project.github} target='_blank' mcolor={'#e3f2fd'} mfontsize={14}>
                                                    <GitHub fontSize='medium' />
                                                </StyledIcon>
                                            </Box>
                                            <Box>
                                                <StyledIcon component={'a'} title='Project Link' href={project.server} target='_blank' mcolor={'#e3f2fd'} mfontsize={14}>
                                                    <OpenInBrowser fontSize='medium' />
                                                </StyledIcon>
                                            </Box>
                                        </ProjectLinks>
                                    </ProjectFooter>
                                )}
                            </ProjectBox>
                        </StyledGridItem>

                    ))}
                </StyledGrid>
            </StyledSection>
        </MainBox>
    )
}

export default Work