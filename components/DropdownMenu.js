import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";

const DropdownMenu = ({value,options,placeholder,handleClick ,styles=""}) => {
  return (
    <div className={`flex flex-row justify-center items-center text-darkslategray px-6 bg-white py-2 rounded-lg ${styles}`}>

    <Dropdown
      className="flex flex-row gap-3 justify-between items-center min-w-[100px] text-[13px] text-gray-500"
      overlay={
        <Menu>
          {options.map((option, index) => (
            <Menu.Item key={index}>
              <a onClick={(e) =>{
                e.preventDefault();
                handleClick(option.value);
              }}>
                {option.value || ""}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      }
      placement="bottomLeft"
      trigger={["hover"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        {value || placeholder}
        <DownOutlined />
      </a>
    </Dropdown>
      </div>
  )
}

export default DropdownMenu
