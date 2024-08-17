import {Box,Typography,TextField,Alert,Button} from "@mui/material";

export default function Register(){
    return(
        <Box>
            <Typography variant="h3">Register</Typography>
            <Alert severity="warning" sx={{ mt: 2}}>All Fields require</Alert>

            <form >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap:1, mt: 2}}>
                    <TextField placeholder="Name" fullWidth/>
                    <TextField placeholder="Username" fullWidth/>
                    <TextField placeholder="Bio" fullWidth/>
                    <TextField placeholder="Password" type="password" fullWidth/>
                    <Button type="submit" variant="contained" fullWidth>
                        Register
                    </Button>
                </Box>
            </form>
        </Box>
    );
}