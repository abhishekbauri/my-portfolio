import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import {motion} from 'framer-motion';


import './Contact.css';

const Contact = () => {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 50}} 
        whileInView={{ opacity: 1, y:0}} 
        transition={{ duration: 1, ease: "linear" }}
        viewport={{ once: true }}
        id='contact-section'
    >
        <h1>Contact</h1>
        <Stack direction="row"  sx={{justifyContent: 'center', flexWrap:'wrap'}}>
            <Button variant="contained" sx={{margin:2}} startIcon={<LinkedInIcon />} href='https://www.linkedin.com/in/abhishek-kumar-bauri-71483a214/' target='_blank'>
                LinkedIn
            </Button>
            <Button variant="contained" sx={{margin:2}} startIcon={<TwitterIcon />} href='https://twitter.com/AbhishekKu56420' target='_blank'>
                Twitter
            </Button>
            <Button variant="contained" sx={{margin:2}} startIcon={<MailIcon />} href='mailto: abhishekkrbauri02@gmail.com' target='_blank'>
                Mail
            </Button>
            <Button variant="contained" sx={{margin:2}} startIcon={<GitHubIcon />} href='https://github.com/abhishekbauri' target='_blank'>
                GitHub
            </Button>
        </Stack>
    </motion.section>
  )
}

export default Contact