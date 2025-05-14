import React from 'react'
import {
  CalendarViewDay,
  CalendarToday,
  TripOrigin,
  LocationOn,
  LocalFireDepartment,
  AddLocation,
  Star,
  Redo,
  PieChart,
  IosShare,
  CloudDownload,
  BubbleChart,
  ShowChart,
  FormatAlignJustify,
  ClearAll,
  OndemandVideo,
  KeyboardVoice,
  Autorenew,
  Add,
  PlayArrow,
  MailOutline,
  TrendingDown,
  FormatListBulleted,
  Tune,
  ArrowForward,
  Subject
} from '@mui/icons-material'
import has from 'lodash'

const MuiIcon = props => {
  const MuiIcons = {
    CalendarViewDay: CalendarViewDay,
    CalendarToday: CalendarToday,
    TripOrigin: TripOrigin,
    LocationOn: LocationOn,
    AddLocation: AddLocation,
    LocalFireDepartment: LocalFireDepartment,
    Star: Star,
    Redo: Redo,
    PieChart: PieChart,
    CloudDownload: CloudDownload,
    IosShare: IosShare,
    BubbleChart: BubbleChart,
    ShowChart: ShowChart,
    FormatAlignJustify: FormatAlignJustify,
    ClearAll: ClearAll,
    OndemandVideo: OndemandVideo,
    KeyboardVoice: KeyboardVoice,
    Autorenew: Autorenew,

    Add: Add,
    PlayArrow: PlayArrow,
    MailOutline: MailOutline,
    TrendingDown: TrendingDown,
    Tune: Tune,
    FormatListBulleted: FormatListBulleted,
    ArrowForward: ArrowForward,
    Subject: Subject
  }
  if (has(MuiIcons, props.iconName)) {
    const MuiIconComponent = MuiIcons[props.iconName]
    return <MuiIconComponent />
  } else {
    return <div />
  }
}

export default MuiIcon
