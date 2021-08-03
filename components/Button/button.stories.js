import Button from './index'; //importing the button component

export default {
    title: "My First Button" //title for our storybook
}

const Template = arguments_ => <Button {...arguments_} /> //creating a template

export const Primary = Template.bind({})

//Passing the props to the component

Primary.args = {
    classNames: "w-full bg-indigo-600 text-white p-3 rounded-md",
    childrens: "Submit",
    type: "submit"
}

//these arguments will later be the control on the storybook UI and you can change them in the storybook without coming back to the editor.