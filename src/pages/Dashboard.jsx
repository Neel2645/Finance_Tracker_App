import { useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { Modal } from "antd";

const Dashboard = () => {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);

  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  };

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };

  return (
    <div>
      <Header />
      <Cards
        showExpenseModal={showExpenseModal}
        showIncomeModal={showIncomeModal}
      />
      <Modal
        style={{ fontWeight: 600 }}
        title="Add Expense"
        onCancel={handleIncomeCancel} 
        footer={null}
        visible={isIncomeModalVisible}
      >
        Income
      </Modal>
      <Modal
        style={{ fontWeight: 600 }}
        title="Add Expense"
        onCancel={handleExpenseCancel}
        footer={null}
        visible={isExpenseModalVisible}
      >
        Expense
      </Modal>
    </div>
  );
};

export default Dashboard;
