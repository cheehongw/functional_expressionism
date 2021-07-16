import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { green, red } from '@material-ui/core/colors';

export default function StatusIcons(status) {
    if (status === null || status === undefined) {
      return 'Unknown/Info missing'
    } else if (status) {
      return <CheckIcon style={{ color: green[500] }} />
    } else if (!status) {
      return <CloseIcon style={{ color: red[500] }} />
    }
}

