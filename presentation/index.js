// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image,
  Notes,
  Magic,
  Table,
  TableBody,
  TableRow,
  TableItem,
  TableHeader,
  TableHeaderRow,
  TableHeaderItem,
  Appear,
  Layout,
  Fill,
  Fit
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
    alert: 'red'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const images = {
  kat: require('../assets/kat.png'),
  sanoma: require('../assets/sanoma.svg'),
  twitter: require('../assets/twitter_lite_small.png'),
  futurice: require('../assets/futurice.svg'),
  loading: require('../assets/loading.gif'),
  results: require('../assets/results.jpg'),
  events: require('../assets/events.png'),
  twitter: require('../assets/twitter.png'),
  testMySite: require('../assets/test_my_site.png'),
  phone: require('../assets/pixel_phone_small.png'),
  internetUsage: require('../assets/internet_usage_2009_2016_ww.png'),
  crUxLoading: require('../assets/cr_ux_loading.png'),
  timeline: require('../assets/perf-metrics-load-timeline.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide', 'fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" fit caps>
            Web Performance
          </Heading>
          <Heading size={6} textColor="tertiary" fit caps>
            How to measure and improve it
          </Heading>
        </Slide>
        <Magic>
          <Slide bgColor="primary">
            <Heading size={6} textColor="secondary" fit caps>
              Analyzing and Improving
            </Heading>
            <Heading size={6} textColor="secondary" fit caps>
              the Loading Performance
            </Heading>
            <Heading size={6} textColor="secondary" fit caps>
              of Large-scale Websites on Mobile Devices
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
              Master's Thesis – Olavi Haapala
            </Text>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={6} textColor="primary" caps>
              Agenda
            </Heading>
            <List textColor="tertiary">
              <ListItem>Motivation</ListItem>
              <ListItem>Scope</ListItem>
              <ListItem>Results & Findings</ListItem>
              <ListItem>Conclusion</ListItem>
              <ListItem>Demo</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Notes>
              <h4>Slide notes</h4>
              <ul>
                <li> Web has evolved dramatically </li>
                <li> From webpages to web applications </li>
                <li> All of us sometimes frustrated how slow </li>
              </ul>
            </Notes>
            <Heading size={6} textColor="secondary" caps>
              Motivation
            </Heading>
          </Slide>
          <Slide bgColor="primary" textColor="primary">
            <Image src={images.loading} margin="20px auto 40px" />
          </Slide>
        </Magic>
        <Slide bgColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <ul>
              <li>Web has evolved</li>
              <li>Usage on mobile has increased</li>
              <li>For Finland: 34% mobile</li>
              <li>For Finland: 7% tablet</li>
              <li> For IS: roughly 55% mobile&tablet</li>
            </ul>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            Mobile & Tablet exceeded desktop
          </Heading>
          <Image
            src={images.internetUsage.replace('/', '')}
            margin="20px auto 40px"
          />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Slide notes</h4>
            <ul>
              <li>Median sizes on Mobile</li>
              <li>CSS: ▲320% (50 KB)</li>
              <li>CSS: ▲250% (85 KB)</li>
              <li>JS: ▲570% (352 KB)</li>
              <li>Images: ▲950% (791 KB)</li>
              <li>Total: ▲980% (1560 KB)</li>
              <li>2017: CSS ▲15%, Fonts ▲10%, JS: ▲14%, Total ▲12%</li>
              <li>https://httparchive.org/reports/</li>
            </ul>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            Heavier websites (vs. 2010)
          </Heading>
          <Appear>
            <Text margin="40px 0 0 0" textColor="alert">
              CSS Bytes: ▲320%
            </Text>
          </Appear>
          <Appear>
            <Text textColor="alert">Font Bytes: ▲250%</Text>
          </Appear>
          <Appear>
            <Text textColor="alert">JS Bytes: ▲570%</Text>
          </Appear>
          <Appear>
            <Text textColor="alert">Image Bytes: ▲950%</Text>
          </Appear>
          <Appear>
            <Text textColor="alert">Total KiloBytes: ▲980%</Text>
          </Appear>
          <Appear>
            <Text margin="40px 0 0 0">
              <Text textColor="primary">2017</Text>
              <Text textColor="alert">CSS ▲15%, Fonts ▲10%</Text>
              <Text textColor="alert">JS: ▲14%, Total ▲12%</Text>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Slide notes</h4>
            <ul>
              <li>DoubleClick by Google, 2016</li>
              <li>The average load time for mobile sites 19 seconds over 3G</li>
              <li>77% of mobile sites take longer than 10s to load.</li>
              <li>
                53% of mobile site visits are abandoned if pages take longer
                than 3 seconds to load.
              </li>
              <li>
                Mobile sites that load in 5 seconds earn up to 2x more mobile ad
                revenue than those whose sites load in 19 seconds
              </li>
              <li>
                Webpagetest.org, Sampled 11.8K global mWeb homepage domains
                loaded using a fast 3G connection timing first view only (no
                cached resources), February 2016
              </li>
              <li />
              <li>
                Google Data, Aggregated, anonymized Google Analytics data from a
                sample of mWeb sites opted into sharing benchmark data, n=3.7K,
                Global, March 2016
              </li>
            </ul>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            Slow webpages on 3G
          </Heading>
          <Appear>
            <Text margin="40px 0 0 0" textColor="tertiary">
              19s
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">77%</Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">53%</Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">5s –> 2X</Text>
          </Appear>
        </Slide>

        <Slide bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <li>Many ways to measure performance</li>
          </Notes>
          <Heading size={6} textColor="secondary" caps>
            Browser events
          </Heading>
          <Image src={images.events.replace('/', '')} margin="20px auto 40px" />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Slide notes</h4>
            <li>Many ways to measure performance – events</li>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            Measuring web performance
          </Heading>
          <Text textColor="tertiary">Metrics</Text>
          <Text textColor="primary">
            Load Time, Fully Loaded, First Byte, Start Render, Speed Index,
            First Paint, First Contentful Paint, First Meaningful Paint, First
            Interactive, Concistently Interactive
          </Text>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Slide notes</h4>
            <li>Many ways to measure performance</li>
            <li>
              FCP: The number of seconds from the time the navigation started
              until the page's primary content appears on the screen.
            </li>
            <li>
              DOMContentLoaded: The number of seconds from the time the
              navigation started until the initial HTML document has been
              completely loaded and parsed.
            </li>
            <li>
              First Interactive: The number of seconds from the time the
              navigation started until the layout is stabilized, web fonts are
              visible, and the page is responsive to user input. This metric
              comes from Lighthouse as is only available in mobile tests.
            </li>
            <li>
              Concistently Interactive: The number of seconds from the time the
              navigation started until the page is fully interactive and the
              network is idle. This metric comes from Lighthouse as is only
              available in mobile tests.
            </li>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            Measuring web performance
          </Heading>
          <Image
            src={images.timeline.replace('/', '')}
            margin="20px auto 40px"
          />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Slide notes</h4>
            <li>What should I measure</li>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            What should I measure?
          </Heading>
          <Appear>
            <Text textColor="primary">It depends</Text>
          </Appear>
          <Appear>
            <Link
              textColor="tertiary"
              href="http://lab.speedcurve.com/rendering/picker.php"
            >
              Try for yourself
            </Link>
          </Appear>
          <Appear>
            <Image src={images.results} margin="20px auto 40px" />
          </Appear>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Slide notes</h4>
            <li>
              FCP: The number of seconds from the time the navigation started
              until the page's primary content appears on the screen.
            </li>
            <li>
              DOMContentLoaded: The number of seconds from the time the
              navigation started until the initial HTML document has been
              completely loaded and parsed.
            </li>
            <li>
              First Interactive: The number of seconds from the time the
              navigation started until the layout is stabilized, web fonts are
              visible, and the page is responsive to user input. This metric
              comes from Lighthouse as is only available in mobile tests.
            </li>
            <li>
              Concistently Interactive: The number of seconds from the time the
              navigation started until the page is fully interactive and the
              network is idle. This metric comes from Lighthouse as is only
              available in mobile tests.
            </li>
            <li>
              https://httparchive.org/reports/loading-speed?start=earliest&end=latest
            </li>
          </Notes>
          <Heading size={6} textColor="primary" caps>
            Webpages get slower (vs. 2017)
          </Heading>
          <Appear>
            <Text textColor="tertiary">
              First Contentful Paint
              <Text textColor="alert">5.9 seconds ▲23%</Text>
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">
              DOMContentLoaded
              <Text textColor="alert">7.6 seconds ▲27%</Text>
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">
              Time to First Interactive
              <Text textColor="alert">10.7 seconds ▲6%</Text>
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">
              Time to Consistently Interactive
              <Text textColor="alert">14.8 seconds ▲22%</Text>
            </Text>
          </Appear>
        </Slide>
        <Magic>
          <Slide bgColor="secondary" textColor="primary">
            <Notes>
              <h4>Slide notes</h4>
              <ul>
                <li>Usability study by Nielsen (1994)</li>
                <li>
                  Users will be unable to notice and no special feedback is
                  needed for delays of about 0.1 seconds
                </li>
                <li>
                  Delays between 0.1 and 1.0 seconds will be noticed but the
                  user’s flow will stay uninterrupted.
                </li>
                <li>Visual feedback needed</li>
              </ul>
            </Notes>
            <Heading size={6} textColor="primary" caps>
              How users feel about delays
            </Heading>
            <List textColor="tertiary">
              <ListItem>0.1s</ListItem>
              <ListItem>0.1s – 1.0s</ListItem>
              <ListItem>1.0s – 10s</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Notes>
              <h4>Slide notes</h4>
              <ol>
                <li />
              </ol>
            </Notes>
            <Heading size={6} textColor="secondary" caps>
              Scope
            </Heading>
          </Slide>
        </Magic>
        <Slide bgColor="secondary" textColor="primary">
          <Image src={images.futurice} width="340px" margin="20px auto 40px" />
          <Appear>
            <Image src={images.sanoma} margin="20px auto 40px" />
          </Appear>
        </Slide>
        <Magic>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" caps>
              Scope
            </Heading>
            <Layout>
              <Fill>
                <List textColor="tertiary">
                  <ListItem>Ilta-Sanomat</ListItem>
                  <ListItem>Helsingin Sanomat</ListItem>
                  <ListItem>Front end performance</ListItem>
                  <ListItem>Focus on mobile</ListItem>
                </List>
              </Fill>
              <Image src={images.phone.replace('/', '')} />
            </Layout>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Notes>
              <h4>Slide notes</h4>
              <ul>
                <li>WPT: Open source, detailed results</li>
                <li>Lighthouse: Amazing tool, focus on PWAs</li>
                <li>PSI: Real data, chrome user experience report</li>
                <li>Test My Site: uses crux data, nice visualizations</li>
                <li>Dev tools: chrome has a lot of features</li>
              </ul>
            </Notes>
            <Heading size={6} textColor="primary" caps>
              Selected tools
            </Heading>
            <List textColor="tertiary">
              <ListItem>WebPageTest</ListItem>
              <ListItem>Lighthouse</ListItem>
              <ListItem>PageSpeed Insights</ListItem>
              <ListItem>Test My Site</ListItem>
              <ListItem>Developer tools</ListItem>
              <ListItem>Custom setup</ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary">
            <Notes>
              <h4>Slide notes</h4>
              <ul>
                <li>PWAs modern way of building fast web applications</li>
                <li>Native app like features and feeling</li>
                <li>Manifest for installation on home screen etc.</li>
                <li>Service workers, core feature</li>
                <li>Precached assets, install time caching</li>
                <li>Offline support, fetch handler</li>
              </ul>
            </Notes>
            <Heading size={6} textColor="primary" caps>
              Progressive Web Applications
            </Heading>
            <Layout>
              <Fill>
                <List textColor="tertiary">
                  <ListItem>App manifest</ListItem>
                  <ListItem>Service Worker</ListItem>
                  <ListItem>Precached assets</ListItem>
                  <ListItem>Offline support</ListItem>
                  <ListItem>Example: Twitter Lite</ListItem>
                </List>
              </Fill>
              <Image src={images.phone.replace('/', '')} />
            </Layout>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
              Results & Findings
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Image
              src={images.testMySite.replace('/', '')}
              width="100%"
              margin="20px auto 40px"
            />
            <Text size={1} textColor="primary">
              <Link
                textColor="tertiary"
                href="https://testmysite.withgoogle.com"
              >
                Test My Site
              </Link>{' '}
              results on March 5 2018
            </Text>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Notes>
              <h4>Slide notes</h4>
              <ol>
                <li>Static HTML pages, however 37% of transferred bytes JS</li>
                <li>A lot is done right, regarding caching etc.</li>
                <li>
                  A lot of 3rd parties and even 4th parties and so on. Like ads,
                  analytics etc.
                </li>
                <li>However, improvements are possible.</li>
              </ol>
            </Notes>
            <Heading size={6} textColor="primary" caps>
              Findings for IS & HS
            </Heading>
            <List textColor="tertiary">
              <ListItem>Heavy on assets</ListItem>
              <ListItem>A lot done right</ListItem>
              <ListItem>3rd party assets and content</ListItem>
              <ListItem>Improvements possible</ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Image
              src={images.twitter.replace('/', '')}
              width="100%"
              margin="20px auto 40px"
            />
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Notes>
              <h4>Slide notes</h4>
              <ol>
                <li>January February</li>
                <li>
                  Went through all JS resources, lazyload when possible, remove
                  if possible
                </li>
              </ol>
            </Notes>
            <Heading size={6} textColor="primary" fit caps>
              JavaScript optimization results
            </Heading>
            <Text margin="40px 0 0 0" textColor="tertiary">
              Page Load Time
              <Text textColor="green">17.0% (9.43s -> 7.83s)</Text>
            </Text>
            <Text margin="20px 0 0 0" textColor="tertiary">
              DOMContentLoaded
              <Text textColor="green">23% (5.50s -> 4.25s)</Text>
            </Text>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary" fit caps>
              Prototype PWA Performance Impact
            </Heading>
          </Slide>

          <Slide bgColor="tertiary" textColor="primary" padding="0px">
            <Notes>
              <h4>Slide notes</h4>
              <ol>
                <li />
              </ol>
            </Notes>
            <Heading size={6} textColor="secondary" caps>
              PWA Repeat View Performance
            </Heading>
            <Table
              bgColor="primary"
              textColor="secondary"
              margin="40px 0 0 0"
              padding="20px"
            >
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>Master</TableHeaderItem>
                  <TableHeaderItem>PWA</TableHeaderItem>
                  <TableHeaderItem>Improvement</TableHeaderItem>
                  <TableHeaderItem>%</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow margin="20px 0 0 0">
                  <TableItem>Speed Index</TableItem>
                  <TableItem>3058</TableItem>
                  <TableItem>3024</TableItem>
                  <TableItem>34</TableItem>
                  <TableItem>1.11%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Start Render</TableItem>
                  <TableItem>2.478s</TableItem>
                  <TableItem>2.431s</TableItem>
                  <TableItem>0.061s</TableItem>
                  <TableItem>2.46%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>First Interactive</TableItem>
                  <TableItem>7.236s</TableItem>
                  <TableItem>6.795s</TableItem>
                  <TableItem>0.125s</TableItem>
                  <TableItem>1.73%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Load Time</TableItem>
                  <TableItem>6.730s</TableItem>
                  <TableItem>6.510s</TableItem>
                  <TableItem>0.117s</TableItem>
                  <TableItem>1.74%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Slide>

          <Slide bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
              Conclusion
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Notes>
              <h4>Slide notes</h4>
              <ol>
                <li>Minimize the bytes transferred through the network</li>
                <li>Minimize render-blocking CSS</li>
                <li>Minimize parser-blocking JavaScript</li>
              </ol>
            </Notes>
            <Heading size={6} textColor="primary" caps>
              Recommendations
            </Heading>
            <List textColor="tertiary">
              <ListItem>Focus on performance</ListItem>
              <ListItem>Continuous monitoring</ListItem>
              <ListItem>Small improvements</ListItem>
              <ListItem>Prioritize visible content</ListItem>
              <ListItem>Lazyload when possible</ListItem>
              <ListItem>PWA: it depends</ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading>Demo time</Heading>
            <Heading margin="40px 0 0 0" size={4} textColor="primary">
              If we have time...
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading textColor="primary">Links</Heading>
            <List textColor="tertiary">
              <ListItem>
                <Link
                  target="blank"
                  textColor="tertiary"
                  href="http://lab.speedcurve.com/rendering/picker.php"
                >
                  Try which event you should focus on
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  target="blank"
                  textColor="tertiary"
                  href="https://speedcurve.com/speedcurve-enterprise/top-sites/site/?b=chrome&d=30&de=1&ds=1&r=us-west-1&s=38668&u=73840&share=0cv2ymz1ymyhv8b0hwbuvsz1a480u3"
                >
                  SpeedCurve data for top sites
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  target="blank"
                  textColor="tertiary"
                  href="https://github.com/olpeh/notes-and-lists/blob/master/web-dev-interesting-links.md"
                >
                  A large collection of interesting links
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  target="blank"
                  textColor="tertiary"
                  href="https://twitter.com/0lpeh"
                >
                  Follow me on Twitter
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading>Thank you!</Heading>
            <Heading margin="40px 0 0 0" size={4} textColor="primary">
              Questions?
            </Heading>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Image
              src={images.futurice}
              width="340px"
              margin="40px auto 40px"
            />
            <Image src={images.sanoma} margin="20px auto 40px" />
          </Slide>
        </Magic>
      </Deck>
    );
  }
}
