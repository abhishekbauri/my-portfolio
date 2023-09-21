import Grid from '@mui/material/Grid';
import { companyUrl, kreditBeeExp } from '../constant/constant';

import './Experience.css';
const Experience = () => {
  return (
    <section id='exp-section'>
        <h1 className='exp-heading'>Experience</h1>
        <Grid container className='exp-container'>
            <Grid item xs={10} md={6} className='company-photo'>
                <img src={companyUrl} alt='KreditBee' />
            </Grid>
            <Grid item xs={10} md={6} className='exp-details'>
                <h1>Software Engineer Intern</h1>
                <h2>(Jan, 23 - June, 23)</h2>
                <br />
              
                <p>{kreditBeeExp} </p>
            </Grid>
        </Grid>

    </section>
    )
}

export default Experience