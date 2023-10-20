import type { Meta, StoryObj } from '@storybook/react';
import { ShowCard } from '../../components';
import { MOVIE_DATA } from '../constants';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
    title: 'Components/Show Card',
    component: ShowCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [withRouter],
} satisfies Meta<typeof ShowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IronMan: Story = {
    args: {
        details: MOVIE_DATA,
        showType: 'movie',
        profile: null,
    },
};
