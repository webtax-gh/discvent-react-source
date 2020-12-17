import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const buttonStyles = makeStyles({
    button: {
      '&:hover': {
        backgroundColor: '#1976d2',
    },
  }})

function millisecondsToStr (milliseconds) {
    // TIP: to find current time in milliseconds, use:
    // var  current_time_milliseconds = new Date().getTime();

    function numberEnding (number) {
        return (number > 1) ? 's' : '';
    }

    var temp = Math.floor(milliseconds / 1000);
    var years = Math.floor(temp / 31536000);
    if (years) {
        return years + ' year' + numberEnding(years);
    }
    //TODO: Months! Maybe weeks? 
    var days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
        return days + ' day' + numberEnding(days);
    }
    var hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
        return hours + ' hour' + numberEnding(hours);
    }
    var minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
        return minutes + ' minute' + numberEnding(minutes);
    }
    var seconds = temp % 60;
    if (seconds) {
        return seconds + ' second' + numberEnding(seconds);
    }
    return 'less than a second'; //'just now' //or other string you like;
}

function Invite({ time }) {
    const classes = buttonStyles()

    if (time > 1608238800000) {
        return (
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="secondary" className={classes.button}>
                    <Typography component="h4" variant="h5" style={{fontWeight: 'bold'} } align="center" color="textPrimary">
                    <Grid item>
                    <a style={{color: "inherit", textDecoration: "inherit"}} href="https://discord.gg/abcdef">Join Server</a>
                    </Grid>
                    </Typography>
                    </Button>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container spacing={2} justify="center">
                <Typography component="h4" variant="h5" style={{fontWeight: 'bold', color: '#ff9800'}} align="center" color="textPrimary">
                    <Grid item>
                        The server will open in {millisecondsToStr(1608238800000-time)}.
                    </Grid>
                </Typography>
            </Grid>
        )  
    }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {shuffle(['Bluetriggerfish','CustomName','FakerUp','PickSuprise','RJain','SilentMemer','Toadstar0']).map(name=> name+' ')}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));

const cards = {1:['Dank Memer', 'Global currency game with over 10m users, stealing, pets, unique items, and more! We also have image generation, memes, and mini-games! ', 'https://i.imgur.com/8nLFCVP.png', 'https://dankmemer.lol'],
    2:['Reaction Roles (Droplet)', ' React to a message to get a role! Add as many reaction roles as you want to your message!', 'https://droplet.gg/assets/img/Reaction_Roles_logo.png', 'https://droplet.gg/ReactionRoles'],
    3:['Kuroka', '🎉 | Best Giveaways Bot • Stable & 100% free • No ads • 25+ possible requirements • Scheduled Giveaways • Invites • Drops | 🎉 ', 'https://cdn.discordapp.com/avatars/754024463137243206/589a2c87e5d1f5711e2dd22ca7b9af3c.webp?size=512', 'https://www.kuroka.xyz/'],
    4:['dsc.gg', 'Vanity links for your server, bot, or template.', 'https://dsc.gg/images/logo.png', 'https://dsc.gg'],
    5:['Helper', 'The best ticket bot, an incredible assistant, and an amazing Helper. Helper is the best Ticket bot with a dashboard ', 'https://images.discordapp.net/avatars/409538753997307915/90db348df2752ba6fabb2910955b7e86.png?size=512', 'https://helper.wtf/'],
    6:['Statbot', 'Server stats bot ★Dashboard & graphs ★Channel counters w/ members, online, goals, clocks, statistics ★Roles using serverstats > levels', 'https://images.discordapp.net/avatars/491769129318088714/f23fd300d377ab133db1d6ac7db5d10b.png?size=512', 'https://statbot.net/']};
const keys = shuffle(Object.keys(cards));

export default function Discvent() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundColor:'#23272A'}}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{fontSize:'70px'}}gutterBottom>
              <b>Discvent</b>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A full week filled with fun events, giveaways, and celebrations. While Snowsgiving might be over, there's still a lot more to celebrate! Join your favorite Discord YouTubers in celebrating Discvent!
            </Typography>
            <div className={classes.heroButtons}>
              <Invite time={Date.now()} />
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
          Sponsors
          </Typography>
          <Grid container spacing={4}>
            {keys.map((key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card style={{borderRadius:'20px'}} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cards[key][2]}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cards[key][0]}
                    </Typography>
                    <Typography>
                      {cards[key][1]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <a style={{color: "inherit", textDecoration: "inherit"}} href={cards[key][3]}>View</a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Discvent
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Happy Holidays!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
