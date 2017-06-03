AutoCAD custom pattern
---

![pattern](https://github.com/rern/tips/blob/master/AutoCAD/pattern.png)

```sh
*Honeycomb, rim to rim 10
; name must be tha same as file name (matched case not needed)

; part 1
; angle

; part 2
; origin

; part 3 - line space and shift
; delta-x = start#1 diff start#2
; delta-y = between line#1 and line#2

; part 4 - line pattern only
; (positive) = dash
; (negative) = space
; (zero) = dot

0, 0,0, 8.6602575,5, -11.547005383792515290182975610039,5.7735026918962576450914878050196
60, 0,0, 8.6602575,5, 5.7735026918962576450914878050196,-11.547005383792515290182975610039
120, 0,0, 8.6602575,5, -11.547005383792515290182975610039,5.7735026918962576450914878050196
```
