import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function VideoModel({ open, setOpen, videoLink, setVideoLink }) {

    const handleClose = () => {
        setVideoLink(null)
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <video controls width="100%" height="auto">
                        <source src={videoLink} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
