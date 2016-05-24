import {
  StyleSheet,
} from 'react-native'
import type { StyleObj } from 'StyleSheetTypes'

const MAX_VALUE = 200


function getStyleFromScore(score: number): StyleObj {
  if (score < 0) {
    return styles.noScore
  }

  const normalizedScore = Math.round((score / 100) * MAX_VALUE)
  return {
    color: 'rgb(' +
      (MAX_VALUE - normalizedScore) + ', ' +
      normalizedScore + ', ' +
      0 +
    ')'
  }
}

const styles = StyleSheet.create({
  noScore: {
    color: '#999999',
  },
})

export default getStyleFromScore
