import React, { useState } from 'react';

const FinanzasPage = () => {
  const [transactions, setTransactions] = useState([]); // Lista de transacciones
  const [dailyCash, setDailyCash] = useState(0); // Total en caja diaria
  const [income, setIncome] = useState(0); // Total de ingresos
  const [expenses, setExpenses] = useState(0); // Total de egresos
  const [profit, setProfit] = useState(0); // Utilidades

  const [form, setForm] = useState({ type: 'Ingreso', amount: '' }); // Estado del formulario

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Agregar una nueva transacción
  const addTransaction = (e) => {
    e.preventDefault(); // Evita recargar la página

    const { type, amount } = form;
    const transactionAmount = parseFloat(amount);

    if (!transactionAmount || transactionAmount <= 0) {
      alert('Por favor, ingresa un monto válido.');
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      type,
      amount: transactionAmount,
      date: new Date(),
    };

    setTransactions([...transactions, newTransaction]);

    // Actualizar valores
    if (type === 'Ingreso') {
      setIncome(income + transactionAmount);
      setDailyCash(dailyCash + transactionAmount);
    } else if (type === 'Egreso') {
      setExpenses(expenses + transactionAmount);
      setDailyCash(dailyCash - transactionAmount);
    }

    // Calcular utilidades
    setProfit(income - expenses + (type === 'Ingreso' ? transactionAmount : -transactionAmount));

    // Reiniciar el formulario
    setForm({ type: 'Ingreso', amount: '' });
  };

  return (
    <div>
      <h2>Finanzas</h2>

      {/* Formulario para agregar transacciones */}
      <div>
        <h3>Registrar Transacción</h3>
        <form onSubmit={addTransaction}>
          <label>
            Tipo de Transacción:
            <select name="type" value={form.type} onChange={handleInputChange}>
              <option value="Ingreso">Ingreso</option>
              <option value="Egreso">Egreso</option>
            </select>
          </label>
          <br />
          <label>
            Monto:
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleInputChange}
              placeholder="Ingresa el monto"
            />
          </label>
          <br />
          <button type="submit">Agregar Transacción</button>
        </form>
      </div>

      {/* Caja diaria */}
      <div>
        <h3>Caja Diaria</h3>
        <p><strong>Total en Caja:</strong> ${dailyCash.toFixed(2)}</p>
      </div>

      {/* Reportes de ingresos/egresos */}
      <div>
        <h3>Reportes de Ingresos/Egresos</h3>
        <p><strong>Total Ingresos:</strong> ${income.toFixed(2)}</p>
        <p><strong>Total Egresos:</strong> ${expenses.toFixed(2)}</p>
        <h4>Transacciones</h4>
        {transactions.length === 0 ? (
          <p>No hay transacciones registradas.</p>
        ) : (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <strong>{transaction.type}:</strong> ${transaction.amount.toFixed(2)} -{' '}
                {transaction.date.toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cálculo de utilidades */}
      <div>
        <h3>Cálculo de Utilidades</h3>
        <p><strong>Utilidades Netas:</strong> ${profit.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FinanzasPage;
