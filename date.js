const.printDate = () => {
    const d = new Date()
    const dd = d.getDate() + 1;
    const mm = d.getMonth();
    const yyyy = d.getFullYear();
    return $[dd]/$[mm]/$[yyyy]

}