const InoutField = ({ label, inputClass, svg, name, type, value, onChange, onBlur, error, placeholder }) => {
    return (
        <div className={`floating-input ${error ? "mb-1" : "mb-5"} relative`}>
            <input
                type={type}
                id={name}
                name={name}
                className={inputClass}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="name@example.com"
                autoComplete="off" />
            <label
                htmlFor={name}
                className="absolute top-0 left-0 px-2 py-3 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">
                {label}
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {svg}
            </div>
        </div>
    )
}

export default InoutField;