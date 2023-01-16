const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    componetDiv:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    form: {
        maxWidth: 600
    },
    submit: {
        marginTop: 15,
        width: 200
    }
}));