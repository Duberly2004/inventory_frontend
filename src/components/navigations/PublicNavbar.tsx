import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../others/hooks/useAuth';
import { IItem } from '../../others/interfaces';
import { logout } from '../../store/auth';
import { useDispatch } from 'react-redux';


const pages: IItem[] = [
  { path: "/", name: "HOME" },
  { path: "/products", name: "PRODUCTS" },
  { path: "/about", name: "ABOUT" }
];
const settings:IItem[] = [
  {name:'Dashboard',path:"/admin"}
];

function PublicNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const {user} = useAuth()
  const dispatch = useDispatch()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateTo = useNavigate()

  return (
    <AppBar position="static" sx={{ background: "black", border: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page: IItem, index: number) => (
                <MenuItem key={index} onClick={() => {
                  navigateTo(page.path)
                  handleCloseNavMenu
                }}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page: IItem, index: number) => (
              <Button
                key={index}
                onClick={() => {
                  navigateTo(page.path)
                  handleCloseNavMenu
                }
                }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {user ?

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.url_avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                {settings.map((setting:IItem,index:number) => (
                  <MenuItem key={index} onClick={()=>{
                    navigateTo(setting.path)
                    handleCloseUserMenu
                  }}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={()=>{
                  dispatch(logout())
                  handleCloseUserMenu

                }}>
                <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
            :
            <Box sx={{ border: "solid 1px", borderRadius: "20px", padding: "0px 10px 0px 10px" }}>
              <Button onClick={() => navigateTo('/login')} sx={{ color: '#fff' }}>
                Login
              </Button>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default PublicNavbar;
