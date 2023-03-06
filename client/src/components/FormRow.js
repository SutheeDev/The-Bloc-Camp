const FormRow = ({
  type,
  name,
  placeholder,
  value,
  handleChage,
  labelText,
}) => {
  return (
    <div className="form-row">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChage}
      />
    </div>
  );
};
export default FormRow;
