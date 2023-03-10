import React from 'react';
import * as store from '../../store';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import Layout from '../layout/Layout';

const useStyles = makeStyles<{ color: string }>()((theme, { color }) => ({
    root: {
        color,
        'height': '100vh'
    },
}));

export const IndexPage: React.FC = () => {
    const { settingStore } = store;

    const { classes, cx } = useStyles({
        color: settingStore.color
    });

    return (
        <Grid container className={cx(classes.root)}>
            <Layout></Layout>
        </Grid>
    )
}