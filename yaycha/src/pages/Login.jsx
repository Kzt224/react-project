import { Alert,Box,Button,TextField,Typography } from "@mui/material";



import { useApp } from "../ThemeApp";



import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const{setAuth} = useApp();

    return(
        <Box>
            <Typography variant="h3">Login</Typography>
            <Alert severity="warning" sx={{ mt :2}}>All Field required</Alert>

            <form onSubmit={e => {
                e.preventDefault();
                setAuth(true);
                navigate("/");
            }}>
                <Box
                sx={{ display: " flex", flexDirection: "column",gap: 1, mt: 2,}}>
                    <TextField placeholder="Username" fullWidth/>
                    <TextField type="password" placeholder="password" fullWidth/>
                    <Button type="submit" variant="contained" fullWidth>
                        Login

                    </Button>
                </Box>

            </form>
        </Box>
    );
}