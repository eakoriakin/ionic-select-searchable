/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  SelectCompareFn,
  StyleEventDetail,
} from '@ionic/core';
import {
  IonicSelectableChangeEventDetail,
} from './components/ionic-selectable/ionic-selectable.component';

export namespace Components {
  interface IonicSelectable {
    /**
    * The text to display on the cancel button.
    */
    'cancelText': string;
    /**
    * A property name or function used to compare object values
    */
    'compareWith'?: string | SelectCompareFn | null;
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled': boolean;
    /**
    * Determines whether any item has been selected. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
    * @returns A boolean determining whether any item has been selected.
    * @memberof IonicSelectableComponent
    */
    'hasValue': () => Promise<boolean>;
    /**
    * Item property to display, e.g, `'name'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'itemTextField': string;
    /**
    * Item property to use as a unique identifier, e.g, `'id'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'itemValueField': string;
    /**
    * A list of items. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
    * @default []
    * @memberof IonicSelectableComponent
    */
    'items': any[];
    /**
    * If `true`, the select can accept multiple values.
    */
    'multiple': boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * The text to display on the ok button.
    */
    'okText': string;
    /**
    * The text to display when the select is empty.
    */
    'placeholder'?: string | null;
    /**
    * The text to display instead of the selected option's value.
    */
    'selectedText'?: string | null;
    /**
    * the value of the select.
    */
    'value'?: any | null;
  }
  interface IonicSelectableModal {}
}

declare global {


  interface HTMLIonicSelectableElement extends Components.IonicSelectable, HTMLStencilElement {}
  var HTMLIonicSelectableElement: {
    prototype: HTMLIonicSelectableElement;
    new (): HTMLIonicSelectableElement;
  };

  interface HTMLIonicSelectableModalElement extends Components.IonicSelectableModal, HTMLStencilElement {}
  var HTMLIonicSelectableModalElement: {
    prototype: HTMLIonicSelectableModalElement;
    new (): HTMLIonicSelectableModalElement;
  };
  interface HTMLElementTagNameMap {
    'ionic-selectable': HTMLIonicSelectableElement;
    'ionic-selectable-modal': HTMLIonicSelectableModalElement;
  }
}

declare namespace LocalJSX {
  interface IonicSelectable {
    /**
    * The text to display on the cancel button.
    */
    'cancelText'?: string;
    /**
    * A property name or function used to compare object values
    */
    'compareWith'?: string | SelectCompareFn | null;
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled'?: boolean;
    /**
    * Item property to display, e.g, `'name'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
    * @default false
    * @memberof IonicSelectableComponent
    */
    'itemTextField'?: string;
    /**
    * Item property to use as a unique identifier, e.g, `'id'`. **Note**: `items` should be an object array. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
    * @default null
    * @memberof IonicSelectableComponent
    */
    'itemValueField'?: string;
    /**
    * A list of items. See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
    * @default []
    * @memberof IonicSelectableComponent
    */
    'items'?: any[];
    /**
    * If `true`, the select can accept multiple values.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * The text to display on the ok button.
    */
    'okText'?: string;
    /**
    * Emitted when the select loses focus.
    */
    'onIonBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the selection is cancelled.
    */
    'onIonCancel'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onIonChange'?: (event: CustomEvent<IonicSelectableChangeEventDetail>) => void;
    /**
    * Emitted when the select has focus.
    */
    'onIonFocus'?: (event: CustomEvent<void>) => void;
    /**
    * The text to display when the select is empty.
    */
    'placeholder'?: string | null;
    /**
    * The text to display instead of the selected option's value.
    */
    'selectedText'?: string | null;
    /**
    * the value of the select.
    */
    'value'?: any | null;
  }
  interface IonicSelectableModal {}

  interface IntrinsicElements {
    'ionic-selectable': IonicSelectable;
    'ionic-selectable-modal': IonicSelectableModal;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ionic-selectable': LocalJSX.IonicSelectable & JSXBase.HTMLAttributes<HTMLIonicSelectableElement>;
      'ionic-selectable-modal': LocalJSX.IonicSelectableModal & JSXBase.HTMLAttributes<HTMLIonicSelectableModalElement>;
    }
  }
}


