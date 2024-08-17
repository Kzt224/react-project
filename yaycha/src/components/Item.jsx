import { Box,Card,CardContent,Typography,IconButton, CardMedia } from "@mui/material";


import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import { formatRelative } from "date-fns";

export default function Item({item,remove,primary,comment}){

  const navigate = useNavigate();
   return(
    <Card sx={{mb: 1}}>
       {primary && <CardMedia sx={{height: 50, bgcolor: green[500],}} />}
      <CardContent
       onClick={() => {
        if(comment) return false;
        navigate(`/comments/${item.id}`);
      }}
      sx={{cursor: "pointer"}} >

        <Box 
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>

         <Box 
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
             <TimeIcon 
                color="success"
                  fontSize="10"/>
              <Typography >{formatRelative(item.created, new Date())}</Typography>
              <Typography
              variant="caption"
              sx={{ color: green[500]}}>
                  A few second ago
              </Typography>
              </Box>

           <IconButton 
               onClick={e =>{
                remove(item.id);
                e.stopPropagation();
               }}>
             <DeleteIcon fontSize="inherit" />
           </IconButton>
         </Box>

         <Box>
           <Typography sx={{ my : 3}}>
             {item.content}
           </Typography>
         </Box>
         <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
             <UserIcon 
              fontSize="small"
              color="info"/>
              <Typography variant="caption" >
                {item.user.name}
              </Typography>
         </Box>
      </CardContent>
    </Card>
   );
}
