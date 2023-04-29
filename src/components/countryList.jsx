import * as React from 'react';
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AAlpsPic1 from '../assets/Austria/alps1.jpg'
import AAlpsPic2 from '../assets/Austria/hallstat1.jpg'
import FranceAlps1 from '../assets/France/francealps1.jpg'
import SwissAlps1 from '../assets/Switzerland/swiss1.jpg'
import SwissAlps2 from '../assets/Switzerland/swiss2.jpg'



const TabTheme = styled(Tab)({
  color: 'white',
  alignItems: 'center',
    width: '33.33%',
});


const ImageStyle = styled('img')({
  height: 'auto',
  width: '100%',
  borderRadius: '10px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  maxWidth: '600px',
  
});

function TabPanel(props){
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, alignItems: 'center' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 function CountryList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', color: 'white', alignItems: 'center', backgroundColor: 'rgba(10, 6, 25, 0.3)', borderRadius: '10px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <TabTheme label="Austria"{...a11yProps(0)} />
          <TabTheme label="France" {...a11yProps(1)} />
          <TabTheme label="Switzerland" {...a11yProps(2)} />
        </Tabs>
      </Box>
<TabPanel value={value} index={0} >
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: '2rem'}}>
    <Typography variant="p">
      Small in size but not in what it can offer you. 
      Few countries combine different environments and landscapes so effectively. 
      One day you can be on the peak of the Alps and the next gazing at imperial Vienna. 
      Whether you like Alpic scenery or an elegant lifestyle combined with good food, 
      in Austria you can have both. 
      In our travel guide below you will find whatever you need for your first visit to Austria.
    </Typography>
    <ImageStyle src={AAlpsPic1} alt="Picture of a lake next to town of Hallstat" />
  </Box>
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: '2rem', paddingTop: '2%', paddingBottom: '5%' }}>
    <ImageStyle src={AAlpsPic2} alt="Picture of Austrian Alps" />
    <Typography variant="p">
      Small in size but not in what it can offer you. 
      Few countries combine different environments and landscapes so effectively. 
      One day you can be on the peak of the Alps and the next gazing at imperial Vienna. 
      Whether you like Alpic scenery or an elegant lifestyle combined with good food, 
      in Austria you can have both. 
      In our travel guide below you will find whatever you need for your first visit to Austria.
    </Typography>
  </Box>
</TabPanel>

<TabPanel value={value} index={1}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem', flexDirection: {xs: 'column', md:'row'} }}>
    <ImageStyle src={FranceAlps1} alt="Picture of French Alps" />
    <Typography variant="p">
    The French Alps offer numerous opportunities for hiking through its natural parks. 
    In addition to acting as habitat for many protected species, 
    the parks also boast beautiful lakes such as Lake Annecy, 
    Lake Le Bourget and Lake Geneva, with the town of Evian, 
    famous for its waters, overlooking the latter.
    </Typography>
  </Box>
</TabPanel>


<TabPanel value={value} index={2}>
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: '2rem' }}>
    <Typography variant="p">
    The Swiss Alps are home to some of the most dramatic scenery in the world. 
    From mountain tops that's height will crane your neck to so many beautiful, 
    isolated lakes that you'll never want to leave. 
    To give you a small taste of what to expect, 
    the ski resort of Zermatt boasts 38 peaks over 4,000 metres alone.
    </Typography>
    <ImageStyle src={SwissAlps1} alt="Picture of Swiss Alps" />
  </Box>
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: '2rem',  paddingTop: '2%', paddingBottom: '5%' }}>
    <ImageStyle src={SwissAlps2} alt="Picture of Swiss Alps and famous Alps cows" />
    <Typography variant="p">
    The Swiss Alps are home to some of the most dramatic scenery in the world. 
    From mountain tops that's height will crane your neck to so many beautiful, 
    isolated lakes that you'll never want to leave. 
    To give you a small taste of what to expect, 
    the ski resort of Zermatt boasts 38 peaks over 4,000 metres alone.
    </Typography>
  </Box>
</TabPanel>

    </Box >
  );
}
export default CountryList