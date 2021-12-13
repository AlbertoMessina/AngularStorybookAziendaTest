import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ActionbarComponent } from '../app/component/actionbar/actionbar.component';

export default {
  // Separare il nome con uno / crea nel canvans di Storybook una sezione. Concantenare più / crea sotto sezioni
  title: 'Actionbar',
  component: ActionbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [ActionbarComponent],
    }),
  ],
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onClickAction: action('onClickAction'),
};

const Template: Story<ActionbarComponent> = args => ({
  props: {
    ...args,
    onClickAction: actionsData.onClickAction,
  },
});

export const Default = Template.bind({});
Default.args = {
  actionbar: {
    position: 'center',
    rounded: false,
    type: 'social'
  }
};

export const leftRoundedCart = Template.bind({});
leftRoundedCart.args = {
  actionbar: {
    position: 'left',
    rounded: true,
    type: 'social'
  }
};

export const rightFlat = Template.bind({});
rightFlat.args = {
  actionbar: {
    position: 'right',
    rounded: false,
    type: 'cart'
  }
};
