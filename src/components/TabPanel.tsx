import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CastTab from './CastTab';
import CreatorTab from './CreatorTab';
import MovieTab from './MovieTab';
import VideoTab from './VideoTab';
import CompanyTab from './CompanyTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const casts = props.movie && props.movie.credits && props.movie.credits.cast;
  const crews = props.movie && props.movie.credits && props.movie.credits.crew;
  const companies =
    props.movie &&
    props.movie.production_companies &&
    props.movie.production_companies;
  const movies =
    props.movie && props.movie.similar && props.movie.similar.results;

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Cast" {...a11yProps(0)} />
          <LinkTab label="Creator" {...a11yProps(1)} />
          <LinkTab label="Similar" {...a11yProps(2)} />
          <LinkTab label="Company" {...a11yProps(3)} />
          <LinkTab label="Videos" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div className="">
        <TabPanel value={value} index={0}>
          <CastTab casts={casts} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CreatorTab crews={crews} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MovieTab movies={movies} mediaType={props.mediaType} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CompanyTab companies={companies} mediaType={props.mediaType} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <VideoTab />
        </TabPanel>
      </div>
    </div>
  );
}
