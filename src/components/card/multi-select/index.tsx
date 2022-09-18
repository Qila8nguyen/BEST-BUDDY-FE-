import { Button, Card, Radio, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type MultiSelectTagProps = {
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

export const MultiSelectTag: React.FC<MultiSelectTagProps> = (props) => {
  const [checkList, setCheckList] = useState<RadioButtonType[]>([])
  const { backgroundColor, icon, title } = props
  const selections = [
    { value: 'positive', label: 'Positive' },
    { value: 'healthy', label: 'Healthy' },
    { value: 'balance', label: 'Balance' },
    { value: 'breakthrough', label: 'Breakthrough' },
    { value: 'attractive', label: 'Attractive' },
  ]

  const onClickButton = (value: RadioButtonType) => {
    console.log('value :>> ', value)
    // setCheckList([...selections])

    if (checkList.find((val) => compareEq2items(val, value))) {
      setCheckList(checkList.filter((v) => !compareEq2items(v, value)))
    } else setCheckList([...checkList, value])
  }

  useEffect(() => {
    console.log('checkList :>>', checkList)
  }, [checkList])
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
