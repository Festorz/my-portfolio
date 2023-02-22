import { Container, Modal } from '@material-ui/core'
import { Close, Menu, PhoneInTalkOutlined } from "@material-ui/icons"
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StyledAvatar, StyledIcon } from '../styles/styles'
import { pages } from './data'
import { Appbar, Appmenu, CloseIcon, Menulinks, MinimizedBar, ModalBody, ModalBox, StyledContact, StyledHeader, StyledToolbar } from './stylednavbar'

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(null);

  useEffect(() => {
    setPath(location.pathname);
  }, [location])


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Appbar>
      <Container maxWidth='xl'>
        <MinimizedBar disableGutters>
          <StyledHeader variant='caption1' component={Link} to={'/'}>Festas Kirui</StyledHeader>
          <StyledIcon mcolor={'#fff'} onClick={handleOpen}>{open ? null : <Menu fontSize='medium' />} </StyledIcon>
          <Modal
            color='transparent'
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          ><>
              <ModalBody>
                <CloseIcon>
                  <StyledIcon mcolor={'#fff'} onClick={handleClose}><Close fontSize='medium' /></StyledIcon>
                </CloseIcon>
                <ModalBox>
                  <Appmenu>
                    {pages.map((page) => (
                      <Menulinks variant='subtitle2'
                        key={page.id}
                        component={Link}
                        to={page.route}

                        onClick={handleClose}
                        mcolor={
                          path === page.route ? '#ff8f00' : null
                        }
                      >
                        {page.label}
                      </Menulinks>
                    ))}
                  </Appmenu>

                </ModalBox>
              </ModalBody>
            </>

          </Modal>
        </MinimizedBar>

        <StyledToolbar disableGutters>
          <StyledHeader variant='caption1' component={Link} to={'/'}>Festas Kirui</StyledHeader>
          <Appmenu>
            {pages.map((page) => (
              <Menulinks variant='subtitle2'
                component={Link}
                to={page.route}
                key={page.id}
                mcolor={
                  path === page.route ? '#ff8f00' : null
                }
              >
                {page.label}
              </Menulinks>
            ))}
          </Appmenu>
          <StyledContact variant='caption1'>+254 798 663 646  </StyledContact>
          <StyledAvatar mright={'5%'}><StyledIcon><PhoneInTalkOutlined /></StyledIcon></StyledAvatar>
        </StyledToolbar>
      </Container>

    </Appbar>
  )
}

export default Navbar