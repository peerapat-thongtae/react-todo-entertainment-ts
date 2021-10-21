import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MovieTab from './MovieTab';

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

export default function PersonBottomTab(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const cast_movies =
    props.person &&
    props.person.movie_credits &&
    props.person.movie_credits.cast;
  const cast_tv =
    props.person && props.person.tv_credits && props.person.tv_credits.cast;

  const crew_movies =
    props.person &&
    props.person.movie_credits &&
    props.person.movie_credits.crew;

  const crew_tv =
    props.person && props.person.tv_credits && props.person.tv_credits.crew;

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
          <LinkTab label="Movies" {...a11yProps(0)} />
          <LinkTab label="TV" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div className="">
        <TabPanel value={value} index={0}>
          <MovieTab
            movies={
              props.person.known_for_department === 'Acting'
                ? cast_movies
                : crew_movies
            }
            mediaType="movie"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MovieTab
            movies={
              props.person.known_for_department === 'Acting' ? cast_tv : crew_tv
            }
            mediaType="tv"
          />
        </TabPanel>
      </div>
    </div>
  );
}
