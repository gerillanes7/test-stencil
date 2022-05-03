/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonComponent {
        "filterUsers": (userName: string) => Promise<void>;
    }
    interface HomeComponent {
        "getUsers": () => Promise<void>;
    }
    interface InputComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TableComponent {
        "users": any[];
    }
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLHomeComponentElement extends Components.HomeComponent, HTMLStencilElement {
    }
    var HTMLHomeComponentElement: {
        prototype: HTMLHomeComponentElement;
        new (): HTMLHomeComponentElement;
    };
    interface HTMLInputComponentElement extends Components.InputComponent, HTMLStencilElement {
    }
    var HTMLInputComponentElement: {
        prototype: HTMLInputComponentElement;
        new (): HTMLInputComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTableComponentElement extends Components.TableComponent, HTMLStencilElement {
    }
    var HTMLTableComponentElement: {
        prototype: HTMLTableComponentElement;
        new (): HTMLTableComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "home-component": HTMLHomeComponentElement;
        "input-component": HTMLInputComponentElement;
        "my-component": HTMLMyComponentElement;
        "table-component": HTMLTableComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
    }
    interface HomeComponent {
    }
    interface InputComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TableComponent {
        "users"?: any[];
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "home-component": HomeComponent;
        "input-component": InputComponent;
        "my-component": MyComponent;
        "table-component": TableComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "home-component": LocalJSX.HomeComponent & JSXBase.HTMLAttributes<HTMLHomeComponentElement>;
            "input-component": LocalJSX.InputComponent & JSXBase.HTMLAttributes<HTMLInputComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "table-component": LocalJSX.TableComponent & JSXBase.HTMLAttributes<HTMLTableComponentElement>;
        }
    }
}
