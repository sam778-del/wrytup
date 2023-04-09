import React from "react";

export default function BodyWeb({ children }) {
    const componentTypes = {
        p: "paragraph",
        h1: "heading1",
        h2: "heading2",
        h3: "heading3",
        h4: "heading4",
        h5: "heading5",
        h6: "heading6",
        ul: "unordered-list",
        ol: "ordered-list",
        li: "list-item",
        span: "span",
        a: "link",
        img: "image",
        div: "div",
    };

    const renderComponent = (child) => {
        const childType = child.type.displayName;
        const componentName = componentTypes[childType];

        if (componentName) {
            const Component = require(`./components/${componentName}`).default;
            return <Component {...child.props} />;
        } else {
            return child;
        }
    };

    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="home-wrapper-4">
                            {React.Children.map(children, (child) => renderComponent(child))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}