import * as React from "react";
import { useNavigate } from "react-router-dom";
import calcToMins from "../../../../utils/calcToMins";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import FunctionsIcon from "@mui/icons-material/Functions";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import VisibilityIcon from "@mui/icons-material/Visibility";

/**
 * article box
 */
export default (props) => {
  const { aid, count, cover, introduction, is_pin, title, view } = props; // get article columns from articleData.js

  const navigate = useNavigate(); // redirect

  // button 'Learn More' Handler
  const toDetailedArticle = () => navigate(`/detailed/${aid}`);

  return (
    <Card
      sx={{
        maxWidth: 245,
        minWidth: 200,
        m: 1,
        position: "relative",
      }}
    >
      {/* img part */}
      <CardMedia component="img" alt="not found" height="140" image={cover} />

      {/* icon part */}
      <Typography
        component="div"
        sx={{
          position: "absolute",
          right: 0,
          top: "40%",
        }}
      >
        {/* Pin icon */}
        {is_pin === 1 && (
          <Tooltip
            title="Pined"
            sx={{
              mr: 1,
              color: "rgba(180, 180, 180, 0.8)",
            }}
          >
            <PushPinIcon />
          </Tooltip>
        )}

        {/* view icon */}
        <Tooltip
          title={`${view} views`}
          sx={{ mr: 1, color: "rgba(180, 180, 180, 0.8)" }}
        >
          <VisibilityIcon />
        </Tooltip>

        {/* count icon */}
        <Tooltip
          title={`${count} words`}
          sx={{ mr: 1, color: "rgba(180, 180, 180, 0.8)" }}
        >
          <FunctionsIcon />
        </Tooltip>

        {/* spendTime icon */}
        <Tooltip
          title={`${calcToMins(count)}`}
          sx={{ mr: 1, color: "rgba(180, 180, 180, 0.8)" }}
        >
          <AccessTimeIcon />
        </Tooltip>
      </Typography>

      <CardContent>
        {/* title */}
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* intro */}
        <Typography variant="body2" color="text.secondary">
          {introduction}
        </Typography>
      </CardContent>

      {/* learn more */}
      <CardActions>
        <Button size="small" onClick={toDetailedArticle}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
