export default function FormField({ id, label, type, placeholder, value, onChange }) {
    return (
        <div>
            <label htmlFor={id} className="block mb-1">{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="w-full bg-gray-200 p-3 rounded"
                value={value}
                onChange={onChange}
            />
        </div >
    );
}
