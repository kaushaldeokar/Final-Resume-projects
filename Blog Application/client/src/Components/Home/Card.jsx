import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function RecipeReviewCard(props) {
    const { FullName, title, description, categories, createdData } = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 1200 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'black', color: 'white' }} aria-label="recipe">
                        {FullName[0]}
                    </Avatar>
                }

                title={title}
                subheader={`${FullName} on ${createdData}`}
            />

            <CardContent>
                <Typography variant="body2" color="Black">
                    TITLE : {title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Read my Article :</Typography>
                    <Typography paragraph>
                        {description}
                    </Typography>
                    
                </CardContent>
            </Collapse>
        </Card>
    );
}

export { RecipeReviewCard };