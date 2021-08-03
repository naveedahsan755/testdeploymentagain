import InputField from './index'; //importing the button component

export default {
    title: "InputFields" //title for our storybook
}

const Template = arguments_ => <InputField {...arguments_} /> //creating a template

export const Primary = Template.bind({})

//Passing the props to the component

Primary.args = {
    inputClass: "border bg-gray-100 border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16",
    label: "Submit",
    type: 'text',
    name: 'Username',
    svg: (<svg className="w-6 h-6 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>),

}

//these arguments will later be the control on the storybook UI and you can change them in the storybook without coming back to the editor.