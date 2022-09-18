import { Button, Card, Radio, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type VerticalSelectTagProps = {
  backgroundColor: string
  icon: React.ReactNode
  title: string
}

export type RadioButtonType = {
  value: string
  label: string
}

const compareEq2items = (a: RadioButtonType, b: RadioButtonType) =>
  a.label + a.value === b.label + b.value

export const VerticalSelectTag: React.FC<VerticalSelectTagProps> = (props) => {
  const [checkList, setCheckList] = useState<RadioButtonType[]>([])
  const { backgroundColor, icon, title } = props
  const selections = [
    { value: 'excited', label: 'excited' },
    { value: 'happy', label: 'happy' },
    { value: 'grateful', label: 'grateful' },
    { value: 'delighted', label: 'delighted' },
    {
      value: 'things will fall into place',
      label: 'things will fall into place',
    },
  ]

  const onClickButton = (value: RadioButtonType) => {
    console.log('value :>> ', value)
    // setCheckList([...selections])

    if (checkList.find((val) => compareEq2items(val, value))) {
      setCheckList(checkList.filter((v) => !compareEq2items(v, value)))
    } else setCheckList([...checkList, value])
  }

  return (
    <Card
      style={{ backgroundColor: backgroundColor }}
      className={styles.container}
    >
      <div className={styles.title}>
        {icon}
        <Typography.Text>{title}</Typography.Text>
      </div>
      <div className={styles['btn-container']}>
        {selections.map((item, idx) => {
          const checked = !!checkList.find((v) => compareEq2items(v, item))
          console.log('checkList :>>', checkList)
          console.log('checked :>>', checked)

          return (
            <Button
              className={classNames([checked ? styles.checked : styles.pink])}
              onClick={() => onClickButton(item)}
              key={idx}
              value={item.value}
            >
              {item.label}
            </Button>
          )
        })}
      </div>
    </Card>
  )
}
