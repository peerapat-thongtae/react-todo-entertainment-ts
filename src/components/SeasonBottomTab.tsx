import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CastTab from './CastTab';
import EpisodeTab from './EpisodeTab';
import VideoTab from './VideoTab';

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

export default function SeasonBottomTab(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const casts = props.movie && props.movie.credits && props.movie.credits.cast;

  const episodes = props.movie && props.movie.episodes;
  const videos =
    props.movie && props.movie.videos && props.movie.videos.results;

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const tabArr = [
    {
      label: 'Cast',
      panel: <CastTab casts={casts} />,
    },

    {
      label: 'Episodes',
      panel: <EpisodeTab episodes={episodes} />,
    },
    {
      label: 'Videos',
      panel: <VideoTab videos={videos} />,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {tabArr &&
            tabArr.map((tab, index) => {
              return (
                <LinkTab label={tab.label} {...a11yProps(index)} key={index} />
              );
            })}
        </Tabs>
      </AppBar>
      <div className="">
        {tabArr &&
          tabArr.map((tab, index) => {
            return (
              <TabPanel value={value} index={index} key={index}>
                {tab.panel}
              </TabPanel>
            );
          })}
      </div>
    </div>
  );
}
