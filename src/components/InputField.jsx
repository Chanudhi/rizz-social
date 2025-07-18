export default function InputField({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-white bg-neutral-800 border border-gray-600 rounded focus:outline-none"
      />
    </div>
  );
}
