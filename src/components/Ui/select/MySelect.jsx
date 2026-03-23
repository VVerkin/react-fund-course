// Компонент принимает массив опций и дефолтное значение, и реализуем двустороннее связывание через управляемый компонент
const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    // select value и onChange для слежки за изменением компонента
    <select
        value={value}
        //onChange позволяет следить за изменениями 
        onChange={event => onChange(event.target.value)}
        >
        
        <option disabled value="">{defaultValue}</option>
        {/* Итерируемся по массиву опций и для каждой опции*/}
        {options.map(option =>
            //Отрисовываем HTML-тег option
            <option key={option.value} value={option.value}>
                {/* Сам текст достаем из поля name*/}
                {option.name}
            </option>
        )}
    </select>
  );
};

export default MySelect;