const express = require('express')
const router = express.Router()
const Node = require('../models/nodes')
const Reading = require('../models/readings')
const checkHealthNodes = require('../util/checkHealthNodes')
const reportMail = require('../util/reportMail')

router.post('/reading', async (req, res) => {
  try {
    if (req.body.backup === '1') {
      const dt = parseInt(req.body.datetime) * 1000
      req.body.datetime = new Date(dt)
    }

    const reading = new Reading(req.body)
    const savedReading = await reading.save()
    if (savedReading == null) {
      throw new Error('Could not save.')
    }

    res.status(201).json(
      {
        msg: 'OK'
      }
    )
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.get('/setpoints/:uid', async (req, res) => {
  try {
    const uid = req.params.uid
    const node = await Node.findOne({
      uid: uid
    })
    console.log({ node })

    res.send({
      co2min: node.co2Range.min,
      co2max: node.co2Range.max,

      temperaturemin: node.temperatureRange.min,
      temperaturemax: node.temperatureRange.max,

      humiditymin: node.humidityRange.min,
      humiditymax: node.humidityRange.max
    })
  } catch (err) {
    res.send({err: err.message})
  }
})

module.exports = router
