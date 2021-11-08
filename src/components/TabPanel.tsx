import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CastTab from './CastTab';
import MovieTab from './MovieTab';
import CompanyTab from './CompanyTab';
import PosterTab from './PosterTab';
import KeywordTab from './KeywordTab';
import CollectionTab from './CollectionTab';

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

export default function TabBottomMovie(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const casts = props.movie && props.movie.credits && props.movie.credits.cast;
  const companies =
    props.movie &&
    props.movie.production_companies &&
    props.movie.production_companies;
  const movies =
    props.movie && props.movie.similar && props.movie.similar.results;

  const backdrops =
    props.movie && props.movie.images && props.movie.images.backdrops;

  const collections = props.movie && props.movie.belongs_to_collection;

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  const tabArr = [
    {
      label: 'Cast',
      panel: <CastTab casts={casts} />,
    },
    {
      label: 'Similar',
      panel: <MovieTab movies={movies} mediaType={props.mediaType} />,
    },
    {
      label: 'Collections',
      panel: <CollectionTab collections={collections} />,
    },
    {
      label: 'Company',
      panel: <CompanyTab companies={companies} mediaType={props.mediaType} />,
    },
    {
      label: 'Keywords',
      panel: <KeywordTab movie={props.movie} />,
    },
    {
      label: 'Backdrops',
      panel: <PosterTab images={backdrops} />,
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
