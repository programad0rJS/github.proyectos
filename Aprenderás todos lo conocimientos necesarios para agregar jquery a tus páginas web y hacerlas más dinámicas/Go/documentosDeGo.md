package main
import "fmt"

func main() {
  fmt.Println("Hello World!")
}


// Es Importaciones  

// Es Importaciones  


// Es Importaciones  


/* XD */

package main
import ("fmt")

func main() {
  if 20 < 18 {
    fmt.Println("20 is greater than 18")
  }
}


package main
import ("fmt")

func main() {
  day := 4

  switch day {
  case 1:
    fmt.Println("Monday")
  case 2:
    fmt.Println("Tuesday")
  case 3:
    fmt.Println("Wednesday")
  case 4:
    fmt.Println("Thursday")
  case 5:
    fmt.Println("Friday")
  case 6:
    fmt.Println("Saturday")
  case 7:
    fmt.Println("Sunday")
  }
}



package main
import ("fmt")

// Create a function
func myMessage() {
  fmt.Println("I just got executed!")
}

func main() {
  myMessage() // call the function
}



package main
import ("fmt")
func main() {

  var a = 15 + 25 // a is 40

  fmt.Println(a)
}



package main
import ("fmt")

func main() {
  var i, j string = "Hello","World"

  fmt.Print(i)
  fmt.Print(j)
}


package main
import ("fmt")

func main() {
  var student1 string = "John" //type is string
  var student2 = "Jane" //type is inferred
  x := 2 //type is inferred

  fmt.Println(student1)
  fmt.Println(student2)
  fmt.Println(x)
}



package main
import ("fmt")

func main() {
  var a, b, c, d int = 1, 3, 5, 7

  fmt.Println(a)
  fmt.Println(b)
  fmt.Println(c)
  fmt.Println(d)
}